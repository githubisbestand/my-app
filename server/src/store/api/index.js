import Chance from "chance";

const chance = Chance();

export function fackData()
{
    return chance.name({ middle: true });
}