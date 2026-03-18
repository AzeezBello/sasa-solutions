import { services } from "@/lib/site";

type SearchParamsLike = {
  get(name: string): string | null;
};

export type ServiceId = (typeof services)[number]["id"];
export type Service = (typeof services)[number];

type CalculatorInput = {
  serviceId?: string | null;
  propertySize?: number | string | null;
  roomCount?: number | string | null;
};

export type PricingEstimate = {
  selectedService: Service;
  propertySize: number;
  roomCount: number;
  basePrice: number;
  sizePrice: number;
  roomPrice: number;
  midpointEstimate: number;
  lowEstimate: number;
  highEstimate: number;
};

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

export function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}

export function formatRoomLabel(value: number) {
  return `${value} room${value === 1 ? "" : "s"}`;
}

export function roundToNearestFive(value: number) {
  return Math.round(value / 5) * 5;
}

export function getServiceById(serviceId?: string | null) {
  return services.find((service) => service.id === serviceId) ?? services[0];
}

function normalizeDecimalInput(value?: number | string | null) {
  return Math.max(0, Number(value) || 0);
}

function normalizeWholeNumberInput(value?: number | string | null) {
  return Math.max(0, Math.floor(Number(value) || 0));
}

export function calculatePricingEstimate({
  serviceId,
  propertySize,
  roomCount,
}: CalculatorInput): PricingEstimate {
  const selectedService = getServiceById(serviceId);
  const normalizedSize = normalizeDecimalInput(propertySize);
  const normalizedRooms = normalizeWholeNumberInput(roomCount);
  const basePrice = selectedService.pricing.basePrice;
  const sizePrice = normalizedSize * selectedService.pricing.perSquareFoot;
  const roomPrice = normalizedRooms * selectedService.pricing.perRoom;
  const midpointEstimate = roundToNearestFive(
    basePrice + sizePrice + roomPrice
  );

  return {
    selectedService,
    propertySize: normalizedSize,
    roomCount: normalizedRooms,
    basePrice,
    sizePrice,
    roomPrice,
    midpointEstimate,
    lowEstimate: roundToNearestFive(midpointEstimate * 0.9),
    highEstimate: roundToNearestFive(midpointEstimate * 1.12),
  };
}

export function buildCalculatorContactHref(input: CalculatorInput) {
  const estimate = calculatePricingEstimate(input);
  const searchParams = new URLSearchParams({
    serviceId: estimate.selectedService.id,
    propertySize: String(estimate.propertySize),
    roomCount: String(estimate.roomCount),
  });

  return `/contact?${searchParams.toString()}#request-brief`;
}

export function getCalculatorEstimateFromSearchParams(
  searchParams: SearchParamsLike
) {
  const serviceId = searchParams.get("serviceId");
  const propertySize = searchParams.get("propertySize");
  const roomCount = searchParams.get("roomCount");

  if (!serviceId && !propertySize && !roomCount) {
    return null;
  }

  return calculatePricingEstimate({
    serviceId,
    propertySize,
    roomCount,
  });
}
