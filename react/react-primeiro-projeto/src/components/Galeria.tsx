import { fotos } from "@/data/fotos";
import { FotoItem } from "./FotoItem";
import { useState } from "react";
import { Modal } from "./Modal";

export const Galeria = () => {

    const [showModal, setShowModal] = useState(false);
    const [imageModal, setImageModal] = useState('');



    function openModal(id: number) {
        setShowModal(true);
        const foto = fotos.find(item => item.id === id);
        if (foto) {
            setImageModal(foto.url);
        }

    }

    function CloseModal() {
        setShowModal(false);
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-10 text-white">Fotos Intergaláticas</h1>
            <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    fotos.map(foto => (<FotoItem foto={foto} onClick={() => openModal(foto.id)}></FotoItem>))
                }
            </section>

            {
                showModal &&
                <Modal image={imageModal} closeModal={CloseModal}></Modal>
            }
        </div>
    );
}