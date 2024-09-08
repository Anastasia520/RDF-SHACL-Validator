import { Parser } from "n3";
import * as jsonld from "jsonld";

// Function to convert Turtle to JSON-LD
export const turtleToJsonLD = async (turtleString: string) => {
  const parser = new Parser();
  const quads = parser.parse(turtleString);

  // Convert RDF quads to JSON-LD format
  const n3Store = await jsonld.fromRDF(quads);
  return await jsonld.flatten(n3Store);
};
