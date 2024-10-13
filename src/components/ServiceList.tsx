import React, { useState } from "react";
import type { Service } from "../types/service";
import { Input } from "./ui/input";
import { Card, CardHeader } from "./ui/card";
import Icon from "./Icon";

export default function ServiceList({ services }: { services: Service[] }) {
  const [searchItem, setSearchItem] = useState("");
  const [filteredItems, setFilteredItems] = useState(services);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = services.filter((service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredItems(filteredItems);
  };
  return (
    <div className="space-y-4">
      <Input
        placeholder="Search services"
        className="p-2"
        value={searchItem}
        onChange={handleInputChange}
      />
      <div className="grid grid-cols-3 gap-4">
        {filteredItems.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card>
      <CardHeader>
        <a href={service.deleteAccountPage} target="_blank" rel="noreferrer">
          <div className="flex flex-row justify-start gap-4 items-center">
            <Icon name={service.icon} />
            <h3 className="text-lg font-bold text-center">{service.name}</h3>
          </div>
        </a>
      </CardHeader>
    </Card>
  );
}
