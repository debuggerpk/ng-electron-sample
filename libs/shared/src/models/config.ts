export interface ConfigurationErrors {
  [key: string]: boolean;
}

export interface ConfigState {
  readonly config: Configuration;
}

export interface Configuration {
  outlet_id: string;
  api_key: string;
  api_gateway: string;
  local_gateway: string;
  errors?: ConfigurationErrors | null;
}
