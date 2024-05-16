import { Request, Response, NextFunction } from "express";
import { employeeFromTerritories, employeeTerritories, territories, territoriesById } from "../../models/territories";

export async function getEmployeesByTerritories(req: Request, res: Response, next: NextFunction) {
  let page = 1;
  let territoryId = "";

  const isPageNumberInRoute = req.params.page;
  if (isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if (isPageNumberNaN) {
    res.status(400).json({
      status: "failed",
      error: "territories/employees/'page' must be a number"
    });

    return next();
  }

  const isTerritoryIdInRoute = req.params.territory_id;
  if (isTerritoryIdInRoute) territoryId = req.params.territory_id;

  const isTerritoryIdNotAValue = territoryId.length === 0;
  if (isTerritoryIdNotAValue) {
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
}

export async function getTerritories(req: Request, res: Response, next: NextFunction) {
  let page = 1;

  const isPageNumberInRoute = req.params.page;
  if (isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if (isPageNumberNaN) {
    res.status(400).json({
      status: "failed",
      error: "territories/'page' must be a number"
    });

    return next();
  }

  const data = await territories(page);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
}

export async function getTerritoriesDetails(req: Request, res: Response, next: NextFunction) {
  let territoryId = "";

  const isTerritoryIdInRoute = req.params.territory_id;
  if (isTerritoryIdInRoute) territoryId = req.params.territory_id;

  const isTerritoryIdNotAValue = territoryId.length === 0;
  if (isTerritoryIdNotAValue) {
    res.status(400).json({
      status: "failed",
      error: "territories/details/'territories_id' must have a value"
    });

    return next();
  }

  const data = await territoriesById(territoryId);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
}

export async function getEmployeeTerritories(req: Request, res: Response, next: NextFunction) {
  let page = 1;

  const isPageNumberInRoute = req.params.page;
  if (isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if (isPageNumberNaN) {
    res.status(400).json({
      status: "failed",
      error: "employee_territories/'page' must be a number"
    });

    return next();
  }

  const data = await employeeTerritories(page);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
}
