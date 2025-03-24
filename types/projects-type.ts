export interface IProjectMetricsResponse {
  totalRequests: number;
  totalSuccess: number;
  totalFailures: number;
  successRate: number;
  failureRate: number;
  errorCount: number;
  projectMetrics: IProjectMetrics[];
}

export interface IProjectMetrics {
  projectId: string;
  totalRequests: number;
  totalSuccess: number;
  totalFailures: number;
}
