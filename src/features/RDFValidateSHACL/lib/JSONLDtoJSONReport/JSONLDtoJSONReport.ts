import { ValidationReportItem } from "../../../../entities/ValidationReport";

// Function to process JSON-LD into the desired format
export const JSONLDtoJSONReport = (jsonldData: any) => {
  const results = jsonldData || [];
  const validationResults: Array<ValidationReportItem> = results
    .filter(
      (item: any) =>
        item["@type"] &&
        item["@type"].includes("http://www.w3.org/ns/shacl#ValidationResult")
    )
    .map((result: any) => {
      return {
        focusNode:
          result["http://www.w3.org/ns/shacl#focusNode"]?.[0]?.["@id"] || "",
        resultMessage:
          result["http://www.w3.org/ns/shacl#resultMessage"]?.[0]?.["@value"] ||
          "",
        resultPath:
          result["http://www.w3.org/ns/shacl#resultPath"]?.[0]?.["@id"] || "",
        resultSeverity:
          result["http://www.w3.org/ns/shacl#resultSeverity"]?.[0]?.[
            "@id"
          ]?.split("#")[1] || "",
        value:
          result["http://www.w3.org/ns/shacl#value"]?.[0]?.["@value"] || "",
      };
    });

  return validationResults;
};
