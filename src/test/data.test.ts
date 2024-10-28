import ServiceLoader from "../lib/service-loader";
import type { Service } from "../types/service";
import { expect, test } from "vitest";
import { existsSync } from "fs";
import { join } from "path";

const services = ServiceLoader();
const getServiceIcon = (service: Service) => {
  const iconPath = join(
    join(__dirname, "../../data/icons/"),
    `${service.icon}.png`
  );

  if (existsSync(iconPath)) {
    return true;
  } else {
    return false;
  }
};

test("verify data integrity", () => {
  services.forEach((service) => {
    expect(
      service.name,
      `Service name is required for ${service.name}`
    ).toBeDefined();
    expect(
      service.deleteAccountPage,
      `Delete Account Page is required for ${service.name}`
    ).toBeDefined();
    expect(service.icon, `Icon is required for ${service.name}`).toBeDefined();
    expect(
      getServiceIcon(service),
      `Icon not found for ${service.name}`
    ).toBeTruthy();

    const serviceCount = services.filter(
      (s) => s.name.toLowerCase() === service.name.toLowerCase()
    ).length;
    expect(serviceCount, `${service.name} already exists in the list`).toEqual(
      1
    );
  });
});
