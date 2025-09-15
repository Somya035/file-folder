import { useState } from 'react'
import './App.css'
import data from './data.json'
import Folder from './component/Folder'
import type { FolderType } from './types'

function App() {
  const [folderData, setFolderData] = useState<FolderType[]>(data)

  const onAddNode = (folderId:any,isFolder:boolean) => {
    let name = prompt('Enter name')

    let newFile:FolderType = {
      id:Date.now(),
      name:name ? name : '',
      isFolder:isFolder,
      children:[]
    }

    const updateFolder = (folderData:FolderType[]):FolderType[] => {
      return folderData.map((node:FolderType) => {
        if(node.id === folderId && node.isFolder) {
          return {...node,children:[...node.children,newFile]}
        }
        if(node.children) {
          return {
            ...node,
            children : updateFolder(node.children)
          }
        }
        return node
      })

    }
    setFolderData(updateFolder)
  }

  return (
    <>
      <div>
        <h4>File explorer</h4>
        <div className='file-container'>
        {
          folderData?.map((data)=> (
            <Folder data={data} key={data.id} onAddNode ={onAddNode} />
          ))
        }
        </div>
      </div>
    </>
  )
}

export default App
