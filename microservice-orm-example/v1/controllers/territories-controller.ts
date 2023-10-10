import { Request, Response, NextFunction } from "express";
import { employeeFromTerritories } from "../../models/territories";

export async function getEmployeesByTerritories (req: Request, res: Response, next: NextFunction) {
  let page = 1;
  let territoryId = 1;

  const isPageNumberInRoute = req.params.page;
  if(isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if(isPageNumberNaN) {
    res.status(400).json({
      status: "failed",
      error: "territories/employees/'page' must be a number"
    });

    return next();
  }

  const isTerritoryIdInRoute = req.params.territory_id;
  if(isTerritoryIdInRoute) territoryId = Number(req.params.territory_id);

  const isTerritoryIdNaN = Number.isNaN(territoryId);
  if(isTerritoryIdNaN) {
    res.status(400).json({
      status: "failed",
      error: "territories/employees/'territory_id' must be a number"
    });

    return next();
  }

  const data = await employeeFromTerritories(page, territoryId);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
};