import { IClient } from '../models/client.model';

export const CLIENTS_MOCK: IClient[] = [
  {
    info: {
      lastName: 'Иванов',
      firstName: 'Пётр',
      middleName: 'Степанович',
      birthDate: new Date('1985-05-13'),
      phoneNumber: '+3 80 45 967 31 23',
      gender: 'male',
      clientGroup: 'VIP',
      isSendSMS: false
    },

    address: {
      country: 'Украина',
      area: 'Харьковская область',
      city: 'Харьков',
      street: 'Бориса Годунова',
      building: '12Б',
    },

    identity: {
      documentType: 'Паспорт',
      documentIssuingAuthority: 'МВД Украины',
      documentIssueDate: new Date('2017-04-15')
    }
  },
  {
    info: {
      lastName: 'Иванов',
      firstName: 'Пётр',
      middleName: 'Степанович',
      birthDate: new Date('1985-05-13'),
      phoneNumber: '+3 80 45 967 31 23',
      gender: 'male',
      clientGroup: 'NEW',
      isSendSMS: false
    },

    address: {
      country: 'Украина',
      area: 'Харьковская область',
      city: 'Харьков',
      street: 'Бориса Годунова',
      building: '12Б',
    },

    identity: {
      documentType: 'Паспорт',
      documentIssuingAuthority: 'МВД Украины',
      documentIssueDate: new Date('2017-04-15')
    }
  },
  {
    info: {
      lastName: 'Иванов',
      firstName: 'Пётр',
      middleName: 'Степанович',
      birthDate: new Date('1985-05-13'),
      phoneNumber: '+3 80 45 967 31 23',
      gender: 'male',
      clientGroup: 'REGULAR',
      isSendSMS: false
    },

    address: {
      country: 'Украина',
      area: 'Харьковская область',
      city: 'Харьков',
      street: 'Бориса Годунова',
      building: '12Б',
    },

    identity: {
      documentType: 'Паспорт',
      documentIssuingAuthority: 'МВД Украины',
      documentIssueDate: new Date('2017-04-15')
    }
  },
  {
    info: {
      lastName: 'Иванов',
      firstName: 'Пётр',
      middleName: 'Степанович',
      birthDate: new Date('1985-05-13'),
      phoneNumber: '+3 80 45 967 31 23',
      gender: 'male',
      clientGroup: 'VIP',
      isSendSMS: false
    },

    address: {
      country: 'Украина',
      area: 'Харьковская область',
      city: 'Харьков',
      street: 'Бориса Годунова',
      building: '12Б',
    },

    identity: {
      documentType: 'Паспорт',
      documentIssuingAuthority: 'МВД Украины',
      documentIssueDate: new Date('2017-04-15')
    }
  },
  {
    info: {
      lastName: 'Иванов',
      firstName: 'Пётр',
      middleName: 'Степанович',
      birthDate: new Date('1985-05-13'),
      phoneNumber: '+3 80 45 967 31 23',
      gender: 'male',
      clientGroup: 'VIP',
      isSendSMS: false
    },

    address: {
      country: 'Украина',
      area: 'Харьковская область',
      city: 'Харьков',
      street: 'Бориса Годунова',
      building: '12Б',
    },

    identity: {
      documentType: 'Паспорт',
      documentIssuingAuthority: 'МВД Украины',
      documentIssueDate: new Date('2017-04-15')
    }
  }
];
