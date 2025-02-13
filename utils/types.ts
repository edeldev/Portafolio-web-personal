import { StaticImageData } from "next/image";
import React from "react";

export type TNavigationPage = {
  id: number;
  icon: React.ReactElement;
  route: string;
};

export type TSocialMedia = {
  id: number;
  icon: React.ReactElement;
  link: string;
};

export type TProgramingLenguage = {
  id: number;
  title: string;
  image: StaticImageData;
};

export type TAboutPage = {
  id: number;
  title: string;
  description: string;
  date: string;
};

export type TProyect = {
  id: number;
  lenguages: string;
  alt: string;
  title: string;
  image: StaticImageData;
  link: string;
  code: string;
  proyect: string;
};
