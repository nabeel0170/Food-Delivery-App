import * as Sentry from '@sentry/react-native';
import axios, { AxiosError, HttpStatusCode } from 'axios';

import { ENVIRONMENTS } from '@/constants/AppConstants';

import Environment from './Environment';
export const reactNavigationIntegration = Sentry.reactNavigationIntegration();

Sentry.init({
  // add your dsn here
  dsn: '',
  environment: Environment.appEnv,
  enabled: !Environment.debug && Environment.appEnv !== ENVIRONMENTS.DEV,
  attachScreenshot: true,
  attachStacktrace: true,
  appHangTimeoutInterval: 1000,
  enableAutoPerformanceTracing: true,
  enableAppHangTracking: true,
  enableCaptureFailedRequests: true,
  tracesSampleRate: 1.0,
  integrations: [reactNavigationIntegration],
});

export const captureError = (
  error: unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: Record<string, any> = {},
) => {
  try {
    // Handle aborted axios requests
    if (axios.isCancel(error)) {
      return;
    }

    // If the error is an AxiosError, handle it specifically
    if (error instanceof AxiosError) {
      if (error.code === 'ERR_NETWORK' || !error.response) {
        // Network error or no response
        return;
      }

      if (error.response?.status === HttpStatusCode.Unauthorized) {
        // Unauthorized - Ignore
        return;
      }

      // Capture Axios error with additional context
      Sentry.captureException(error, {
        contexts: {
          axiosError: {
            code: error.code,
            status: error.response?.status,
            ...context,
          },
        },
      });
      return;
    }

    // Capture general errors
    Sentry.captureException(error, {
      contexts: {
        ...context, // Attach custom context here (e.g., action type, screen)
      },
    });
  } catch (err) {
    // Log errors related to Sentry setup itself
    console.error('Error capturing exception in Sentry:', err);
  }
};

export default Sentry;
