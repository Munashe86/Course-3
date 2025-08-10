import { ServiceCategory } from '../types/services';
import { digitalInfrastructure } from './services/digitalInfrastructure';
import { communicationSolutions } from './services/communicationSolutions';
import { businessGrowthTools } from './services/businessGrowthTools';
import { marketingOptimization } from './services/marketingOptimization';

export const serviceCategories: ServiceCategory[] = [
  digitalInfrastructure,
  communicationSolutions,
  businessGrowthTools,
  marketingOptimization
];