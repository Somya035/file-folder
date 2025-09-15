import { useState } from "react";
import { AddFileIcon, AddFolderIcon, ClosedFolderIcon, FileIcon, OpenFolderIcon } from "../utils/IconList";
import type { FolderType } from "../types";

type FolderProps = {
    data:FolderType,
    onAddNode :(folderId:any,isFolder:boolean) => void
}

export default function Folder({data,onAddNode}:FolderProps) {
    const[isExpanded,setIsExpanded] = useState(false)

    const addFolder = (e:React.MouseEvent, folderId:any) => {
        e.stopPropagation()
        onAddNode(folderId,true)
    }
    const addFile = (e:React.MouseEvent, folderId:any) => {
        e.stopPropagation()
        onAddNode(folderId,false)
    }
    return (
        <>
        <div className='section' key={data.id} onClick={(e)=>{setIsExpanded(!isExpanded)}}>
              <div>
              <span className="icon" >{data.isFolder ? isExpanded ? <OpenFolderIcon /> : <ClosedFolderIcon/> : <FileIcon />}</span>
              <span>{data.name}</span>
              </div>
              <div >  
                {
                 data.isFolder && (
                    <>
                    <AddFolderIcon onClick={(e:React.MouseEvent)=>addFolder(e,data.id)}/>
                    <AddFileIcon  onClick={(e:React.MouseEvent)=>addFile(e,data.id)}/>
                    </>
                 ) 
                }
              </div>  

        </div>
        {
            data.children && isExpanded && (
                <div className="children">
                    {data.children.map(data => <Folder  data={data} onAddNode={onAddNode}/>)}
                </div>
            )
        }
       
        </>
    )
}