import type { Service } from "@/types/service";
import services from "../../data/services.json";

function ServiceLoader(): Service[] {
  services.sort((a, b) => a.name.localeCompare(b.name));
  return services;
}

export default ServiceLoader;
