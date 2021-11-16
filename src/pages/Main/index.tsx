import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemCard } from "../../components/ItemCard";
import { ItemForm } from "../../components/ItemForm";
import { Modal } from "../../components/Modal";
import { RootState } from "../../redux";
import { createItemRequest, getAllItensRequest, GetItemProps, ItemToUpdate, updateItemRequest } from '../../actions/ItemActions';

import { MainContainer } from "./style";

export interface ModalStatusProps {
  open: boolean;
  type?: 'form' | 'delete';
}

export function Main() {
  const dispatch = useDispatch()
  const username = useSelector<RootState>(state => state.username) as string
  const itens = useSelector<RootState>(state => state.itens) as GetItemProps[]

  const [isModalOpen, setIsModalOpen] = useState<ModalStatusProps>({ open: false })
  const [item, setItem] = useState({ title: '', content: '' })
  const [editItem, setEditItem] = useState({ title: '', content: '' })
  const [itemToDelete, setItemToDelete] = useState<number>()
  
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    
    dispatch(createItemRequest({ data: { ...item, username } }))

    setItem({ title: '', content: '' })
  }

  function handleEdit(e: FormEvent, item?: ItemToUpdate) {
    e.preventDefault()
  
    // In order to not make an http request every time the button is pressed
    const itemInAllItens = itens.find(el => el.id === item?.id && el)
    if (item?.title === itemInAllItens?.title && item?.content === itemInAllItens?.content) return;

    dispatch(updateItemRequest({
      data: item as Required<ItemToUpdate>
    }))

    setIsModalOpen({
      open: false
    })
  }
  
  useEffect(() => {
    dispatch(getAllItensRequest()) 
  }, [dispatch])

  return (
    <MainContainer>
      <header>
        <h1>CodeLeap Network</h1>
      </header>

      <article role="feed">
        <ItemForm 
          title="What’s on your mind?" 
          type="create"  
          item={item}
          setItem={setItem}
          handleSubmit={handleSubmit}
        />
          
      
        {itens.map((itemData) => {
          return (
            <ItemCard 
              key={itemData.id}
              id={itemData.id}
              datetime={itemData.created_datetime}
              creator={itemData.username}
              title={itemData.title}
              content={itemData.content}
              setIsModalOpen={setIsModalOpen}
              setEditItemData={setEditItem}
              setItemToDelete={setItemToDelete}
            />
          )
        })}
      
      </article>
        {/* create just one modal and pass state to each item */}
      <Modal itemToDelete={itemToDelete as number} modalStatus={isModalOpen} closeModal={setIsModalOpen}>
        {isModalOpen.type === 'form' ? (
          <ItemForm 
            title="Edit item" 
            type="edit"             
            item={editItem}
            setItem={setEditItem}
            handleSubmit={handleEdit}
          />
        ) : (
          <p>Are you sure you want to delete this item?</p>
        )}
      </Modal>
    </MainContainer>
  );
}
