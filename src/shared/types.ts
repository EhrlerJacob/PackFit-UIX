export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    About = "about",
    Plans = "plans",
    Contact = "contact",
    Blog= "blog",
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface PlanType {
    name: string;
    description?: string;
    image?: string;
  }

  export interface BlogType {
    name: string;
    length: number;
    notes: string;
  }