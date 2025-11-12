
export enum VerdictStatus {
  Authentic = 'Authentic',
  Misleading = 'Misleading',
  Fake = 'Fake',
  Unverified = 'Unverified',
}

export interface IVerificationStep {
  title: string;
  icon: string;
  description: string;
  evidence?: {
    image: string;
    caption: string;
    sourceLink?: string;
  };
}

export interface IVerificationCase {
  id: string;
  title: string;
  claim: string;
  description: string;
  verdict: VerdictStatus;
  date: string;
  source: string;
  imageUrl: string;
  imageAlt: string;
  videoUrl?: string;
  report: {
    publishedDate: string;
    summary: string;
    steps: IVerificationStep[];
    conclusion: string;
  };
}
