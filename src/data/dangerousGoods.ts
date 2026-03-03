export interface DangerousGoodsItem {
    title: string;
    examples: string;
}

export const DANGEROUS_GOODS: DangerousGoodsItem[] = [
    {
        title: "Explosives",
        examples: "e.g., Fireworks, Flares, Ammunition, Toy Caps, Gunpowder",
    },
    {
        title: "Flammable Items",
        examples:
            "e.g., Flammable Gases, Gasoline, Lighter Fluid, Aerosol Paints, Strike-Anywhere Matches",
    },
    {
        title: "Corrosives & Poisons",
        examples:
            "e.g., Acids, Bleach, Pesticides, Toxic or Infectious Substances",
    },
    {
        title: "Lithium Battery-Powered Vehicles",
        examples:
            "e.g., Hoverboards, Self-Balancing Wheels, Mini-Segways are forbidden in all baggage",
    },
    {
        title: "Other items",
        examples: "like Tear Gas, Pepper Spray, or Radioactive Material",
    },
];