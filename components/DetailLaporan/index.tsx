"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Config from "@/lib/config";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import ReactPaginate from "react-paginate";

const DetailLaporan = () => {
  return (
    <>
      <div className="flex-col p-4 md:p-8">
        {/* <!-- Navbar --> */}
        {/* <!-- Navbar End --> */}

        {/* <!-- Content --> */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-6xl flex flex-col items-center">
            <div className="w-full">
              <div className="flex flex-col items-center">
                <div className="px-5 pt-5 pb-2 mb-1">
                  <div className="headerprint w-full flex  items-center p-3 border-b-2 border-black">
                    <div className="text-center">
                      <h1 className="text-lg font-bold">
                        TOKA TINDUNG PROJECT
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-center mt-5 mb-10">
                    <h1 className="font-bold text-xl text-center">
                      RCGC DRILL LOG SHEET
                    </h1>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center border-2 border-black p-2 gap-4">
                  <div className="mr-10">
                    <ul className="text-justify">
                      <li>Prop.Hole ID : asjdbjasjbd</li>
                      <li>PROJECT :</li>
                      <li>PROSPECT :</li>
                      <li>HOLE_ID :</li>
                      <li>Time Start :</li>
                      <li>Time Finish :</li>
                    </ul>
                  </div>
                  <div className="mr-10">
                    <ul className="text-justify">
                      <li>NORTHING Prop : dafsdfsdf</li>
                      <li>EASTHING Prop :</li>
                      <li>CoW :</li>
                      <li>Rig. No :</li>
                      <li>Date Start :</li>
                      <li>Date Finish :</li>
                    </ul>
                  </div>
                  <div className="mr-10">
                    <ul className="text-justify">
                      <li>COLLAR AZIMUTH : sdfsdfsd</li>
                      <li>COLLAR DIP</li>
                      <li>RL :</li>
                      <li>NORTHING Hole.ID :</li>
                      <li>EASTHING Hole.ID :</li>
                    </ul>
                  </div>
                  <div className="mr-10">
                    <ul className="text-justify">
                      <li>LOGGED BY : sdfsdfsd</li>
                      <li>DATE :</li>
                      <li>CHECKED BY :</li>
                      <li>DATE :</li>
                      <li>PAGE :</li>
                    </ul>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto w-full mt-6">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-4 text-left border border-gray-300">
                          General Info
                        </th>
                        <th className="p-4 text-left border border-gray-300">
                          Colour
                        </th>
                        <th className="p-4 text-left border border-gray-300">
                          Lithology Type
                        </th>
                        <th className="p-4 text-left border border-gray-300">
                          Quartz
                        </th>
                        <th className="p-4 text-left border border-gray-300">
                          Sample Condition
                        </th>
                        <th className="p-4 text-left border border-gray-300">
                          Sample Weight
                        </th>
                        <th className="p-4 text-left border border-gray-300">
                          Sulphide
                        </th>
                        <th className="p-4 text-left border border-gray-300">
                          Oxide
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50 text-xs">
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-3 ml-0 gap-2">
                            <span className="text-center">Sample ID</span>
                            <span className="text-center">From</span>
                            <span className="text-center">To</span>
                          </div>
                        </td>
                        <td className="p-4 text-center border border-gray-300">
                          COLOUR
                        </td>
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-center">Primary</span>
                            <span className="text-center">Secondary</span>
                          </div>
                        </td>
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-center">Type</span>
                            <span className="text-center">Intensity</span>
                          </div>
                        </td>
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-3 gap-2">
                            <input type="checkbox" className="mx-auto" />
                            <input type="checkbox" className="mx-auto" />
                            <input type="checkbox" className="mx-auto" />
                          </div>
                        </td>
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-center">Actual (kg)</span>
                            <span className="text-center">Plan (kg)</span>
                          </div>
                        </td>
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-center">Type</span>
                            <span className="text-center">%</span>
                          </div>
                        </td>
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-center">Weak</span>
                            <span className="text-center">Medium</span>
                            <span className="text-center">Strong</span>
                          </div>
                        </td>
                      </tr>

                      {/* Example Row */}
                      <tr className="hover:bg-gray-50 text-xs">
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-center">ID-001</span>
                            <span className="text-center">0007</span>
                            <span className="text-center">20 m</span>
                          </div>
                        </td>
                        <td className="p-4 text-center border border-gray-300">
                          Orange
                        </td>
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-center">000</span>
                            <span className="text-center">008</span>
                          </div>
                        </td>
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-center">Type 3</span>
                            <span className="text-center">4%</span>
                          </div>
                        </td>
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-3 gap-2">
                            <input type="checkbox" className="mx-auto" />
                            <input type="checkbox" className="mx-auto" />
                            <input type="checkbox" className="mx-auto" />
                          </div>
                        </td>
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-center">0.5 kg</span>
                            <span className="text-center">1 kg</span>
                          </div>
                        </td>
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-center">Type A</span>
                            <span className="text-center">2%</span>
                          </div>
                        </td>
                        <td className="p-4 border border-gray-300">
                          <div className="grid grid-cols-3 gap-4">
                            <span className="text-center">Weak</span>
                            <span className="text-center">Medium</span>
                            <span className="text-center">Strong</span>
                          </div>
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
                <ReactPaginate
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
                />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailLaporan;
