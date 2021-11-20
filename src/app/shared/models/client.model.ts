export interface IClient {
  info: {
    lastName: string;
    firstName: string;
    middleName?: string;
    birthDate: Date;
    phoneNumber: string;
    gender: string;
    clientGroup: string;
    coordinator?: string;
    isSendSMS: boolean;
  };

  address: {
   postalCode?: string;
   country: string;
   area: string;
   city: string;
   street: string;
   building: string;
  };

  identity: {
    documentType: string;
    documentSeries?: string;
    documentIssuingAuthority: string;
    documentIssueDate: Date;
    documentFile?: File;
  };
}
