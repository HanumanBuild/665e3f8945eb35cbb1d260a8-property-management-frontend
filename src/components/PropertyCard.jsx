
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PropertyCard = ({ name, description, price, imageUrl }) => {
  return (
    <Card className="max-w-sm rounded overflow-hidden shadow-lg">
      <CardHeader>
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <p className="text-lg font-bold">{price}</p>
        <Button variant="outline">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
