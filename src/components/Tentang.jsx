import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Tentang() {
    return (
        <section id="about" className="py-20 px-6 font-tienne bg-[#f0ecd9]">
            <div className="max-w-7xl mx-auto bg-[#fff8ec] rounded-3xl shadow-xl p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Keterangan Bisnis */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#166f4f]">
                            Tentang Warung Arvin
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Warung Arvin adalah usaha rumahan yang menghadirkan aneka camilan tradisional khas Indonesia dengan rasa otentik. Kami menggunakan bahan-bahan segar pilihan dan dibuat dengan penuh cinta untuk memberikan cita rasa yang lezat dan berkualitas.
                        </p>
                        <div className="text-gray-800 text-base space-y-2">
                            <div>
                                <strong className="text-[#166f4f]">Nama Usaha:</strong>
                                <br />
                                Warung Arvin
                            </div>
                            <div>
                                <strong className="text-[#166f4f]">Alamat:</strong>
                                <br />
                                Jl. Jawa RT. 2 RW. 2 Ngebrak, Tawangsari, Garum, Kab. Blitar
                            </div>
                            <div>
                                <strong className="text-[#166f4f]">Jam Operasional:</strong>
                                <br />
                                Senin – Sabtu, 08.00 – 18.00 WIB
                            </div>
                            <div>
                                <strong className="text-[#166f4f]">Kontak:</strong>
                                <br />
                                <div className="flex items-center gap-2">
                                    <FaWhatsapp className="text-green-500" />
                                    <span>0812-3456-7890</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaEnvelope className="text-red-500" />
                                    <span>warungarvin@email.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Google Maps */}
                    <div>
                        <iframe
                            title="Lokasi Warung Arvin"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.701794432695!2d111.83674907415212!3d-7.606427575998052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78f44a6b6b25a9%3A0x8f30d1f4db07dd42!2sNgebrak%2C%20Tawangsari%2C%20Garum%2C%20Blitar%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1716999999999!5m2!1sid!2sid"
                            width="100%"
                            height="400"
                            allowFullScreen
                            loading="lazy"
                            className="rounded-xl border shadow-lg"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
