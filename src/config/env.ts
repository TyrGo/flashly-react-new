type ProcessEnv = {
  serverUrl: string;
  log_level: 'log' | 'error' | 'warn';
};

const dev: ProcessEnv = {
  serverUrl: import.meta.env.VITE_SERVER_URL || 'http://localhost:5000',
  log_level: 'log',
};

const staging: ProcessEnv = {
  serverUrl: 'staging',
  log_level: 'log',
};

const prod: ProcessEnv = {
  serverUrl: 'prod',
  log_level: 'error',
};

let processEnv = dev;

switch (import.meta.env.MODE) {
  case 'development':
    processEnv = dev;
    break;
  case 'staging':
    processEnv = staging;
    break;
  case 'prod':
    processEnv = prod;
    break;
  default:
    processEnv = dev;
    break;
}

export default processEnv;
