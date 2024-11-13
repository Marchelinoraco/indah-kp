"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Config from "@/lib/config";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const TampilanLaporan = () => {
  return (
    <>
      <div className="flex-col ">
        {/* <!-- navbar --> */}

        {/* <!-- navbar end --> */}

        {/* <!-- Content --> */}
        <div className="flex justify-center items-center">
          <h1 className="text-lg mt-20 sm:text-xl md:text-2xl  lg:text-3xl text-center">
            LAPORAN RCGC DRILL LOG SHEET
          </h1>
        </div>
        <hr className="mx-20" />

        <div className="flex  justify-center items-start">
          <div className="flex flex-col items-center justify-center">
            <form className="flex justify-center items-center mt-10">
              <div className="flex">
                <div className="border">
                  <input
                    type="text"
                    placeholder="ketik nama peserta"
                    className="input input-bordered  max-w-xl"
                  />
                </div>
                <button type="submit" className="btn btn-outline btn-accent">
                  Cari
                </button>
              </div>
            </form>

            <div className="">
              <div className="flex-col ">
                <div className="none pr-5 pl-5 pt-5 hidden pb-0 mb-1">
                  <div className="headerprint justify-center p-3 flex border-b-2 border-b-black">
                    <img className="mr-3 w-[100px]" alt="Logo Dinas" />
                    <div
                      className="sub-print flex-col justify-center"
                      style={{ textAlign: "center" }}
                    >
                      <h1 className="text-lg font-bold">
                        TOKA TINDUNG PROJECT
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-center mt-5 mb-10">
                    <h1 className="font-bold text-xl">RCGC DRILL LOG SHEET</h1>
                  </div>
                </div>

                <div className="overflow-x-auto ">
                  <table className="table  border mt-10 mb-10  border-black">
                    {/* head */}
                    <thead>
                      <tr className="m-2 border">
                        <th className="p-2 px-4 border">No</th>
                        <th className="p-2 px-4 border">TANGGAL MASUK</th>
                        <th className="p-2 px-4 border">HOLE_ID</th>
                        <th className="p-2 px-4 border">PROJECT</th>
                        <th className="p-2 px-4 border">PROSPECT</th>
                        <th className="p-2 px-4 border"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border">
                        <td className="p-2 lg:p-3  border">1</td>
                        <td className="p-2 lg:p-3  border">23 maret 2024</td>
                        <td className="p-2 lg:p-3  border">0887</td>
                        <td className="p-2 lg:p-3  border">KOPRA</td>
                        <td className="p-2 lg:p-3  border">TTU</td>
                        <td className="p-2 lg:p-3  border">
                          <button className="aksi px-2 bg-slate-500 rounded-xl">
                            <Link href={"/"}>Details</Link>
                          </button>

                          <button className="aksi px-2 bg-red-500 rounded-xl">
                            Hapus
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-outline btn-accent">
              PDF
            </button>
            <div className="flex justify-center mt-4 mb-10 rounded-sm">
              <nav className="" role="navigation" aria-label="pagination">
                {/* <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  pageCount={Math.min(10, pages)}
                  onPageChange={changePage}
                  containerClassName={
                    "flex items-center h-8 -space-x-px text-sm "
                  }
                  pageLinkClassName={
                    "flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  }
                  previousLinkClassName={
                    "flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  }
                  nextLinkClassName={
                    "flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  }
                  activeLinkClassName={
                    "z-10 flex items-center justify-center h-8 px-3 leading-tight border text-primary-600 border-primary-300 bg-primary-50 hover:bg-primary-100 hover:text-primary-700 "
                  }
                  disabledLinkClassName={"pagination-link is-disabled"}
                /> */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TampilanLaporan;
