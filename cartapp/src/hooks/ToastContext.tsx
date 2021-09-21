import React,{createContext,useContext,useState,useCallback} from 'react';
import { uuid } from 'uuidv4'
import Toast from '../components/Toast'


export interface ToastMessage{
    id:string
    type?: 'success' | 'error' | 'info'
    title:string
    description?:string
}


interface ToastContextData{
    addToast(message:Omit<ToastMessage , 'id'>):void
    removeToast(id:string):void

}


const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({children}) => {

    const[messages,setMessages]=useState<ToastMessage[]>([])


    const addToast=useCallback(({type,title,description}:Omit<ToastMessage , 'id'>)=>{
        const id = uuid()

        const toast = {
            id,
            type,
            title,
            description
        }

        setMessages(oldMessages => [...oldMessages,toast])

    },[])
  
    const removeToast=useCallback((id:string)=>{
        setMessages(state => state.filter(message => message.id !== id))
    },[])
  
    return (
    <ToastContext.Provider value={{addToast,removeToast}}>
        {children}
        <Toast messages={messages}/>
    </ToastContext.Provider>
  );
}

function useToast():ToastContextData{
    const context = useContext(ToastContext)

    if(!context){
        throw new Error('useToast must be use whitin a toastProvider')
    }

    return context
}

export { ToastProvider,useToast}