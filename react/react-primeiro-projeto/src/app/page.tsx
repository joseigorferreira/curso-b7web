'use client'

import { FotoItem } from "@/components/FotoItem";
import { Galeria } from "@/components/Galeria";
import { Modal } from "@/components/Modal";
import { Quiz } from "@/components/Quiz";
import { fotos } from "@/data/fotos";
import { useState } from "react";

const Page = () => {

  return (
    <div className="mx-2 bg-blue-600 w-full h-screen flex justify-center items-center">
      <Quiz></Quiz>
    </div>
  );
}


export default Page;