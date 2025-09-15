import { FaRegFolder } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { AiOutlineFileAdd } from "react-icons/ai";



const ClosedFolderIcon = (props:any) => {
    return <FaRegFolder {...props} />
}

const OpenFolderIcon = (props:any) => {
    return <FaRegFolderOpen {...props} />
}

const FileIcon = (props:any)=> {
    return <FaRegFile {...props} />
}

const AddFolderIcon = (props:any) => {
    return <HiOutlineFolderAdd {...props} />
}

const AddFileIcon = (props:any) => {
    return <AiOutlineFileAdd {...props} />
}

export {ClosedFolderIcon,OpenFolderIcon,FileIcon,AddFolderIcon,AddFileIcon}