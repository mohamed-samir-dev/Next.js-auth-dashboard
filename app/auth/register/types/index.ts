export interface FormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  mobile: string;
  mobile_country_code: string;
}

export interface InputProps {
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
}

export interface PhoneInputProps {
  countryCode: string;
  mobile: string;
  onCountryCodeChange: (code: string) => void;
  onMobileChange: (mobile: string) => void;
}

export interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

export interface RegisterResponse {
  data?: {
    token: string;
  };
  message?: string;
}