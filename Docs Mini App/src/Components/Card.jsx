import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data, reference }) {                    //The component receives two props: data and reference.
    return (
        <motion.div drag dragConstraints={reference} whileDrag = {{scale:1.1}} dragElastic= {0.2} dragTransition={{    bounceStiffness:100, bounceDamping:30}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between mb-3 px-8 py-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoMdCloseCircleOutline /> : <MdOutlineFileDownload size=".9em" color='#fff' />                //Icons from the react-icons library are used for rendering the file icon, close icon, and download icon.
                        }    
                    </span>          
                </div>          
                {
                    data.tag.isOpen && (                                    //using && to only pass one condition
                        <div className={`tag w-full py-4 ${data.tag.tagColor ==="blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div>) 
                }
            </div>

        </motion.div>   //The motion.div is the main container with drag and motion features.
    );
}

export default Card