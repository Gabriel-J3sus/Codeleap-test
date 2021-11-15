import React from "react";
import { useSelector } from "react-redux";

import { ItemToUpdate } from "../../actions";
import { ModalStatusProps } from "../../pages/Main";

import { RootState } from "../../redux";
import { timeSince } from "../../utils/timeSince";

import { ItemCardContainer, StyledDeleteIcon, StyledEditIcon } from "./styles";

interface ItemCardProps extends Required<ItemToUpdate> {
  creator: string;
  datetime: string;
  setIsModalOpen: (modal: ModalStatusProps) => void;
  setEditItemData: (item: Required<ItemToUpdate>) => void
  setItemToDelete: (id: number) => void
}

export const ItemCard: React.FC<ItemCardProps> = ({ id, title, creator, content, datetime, setIsModalOpen, setEditItemData, setItemToDelete }) => {
  const username = useSelector<RootState>(state => state.username) as string
  
  return (
    <ItemCardContainer aria-label="Item">
      <header className="top-content">
        <h3>{title}</h3>

        {username === creator && (
          <span>
            <button 
              type="button" 
              name="delete"
              aria-pressed="false"
              aria-haspopup="true"
              onClick={() => {
                setItemToDelete(id)
                setIsModalOpen({
                  open: true,
                  type: 'delete'
                });
              }} 
            >
              <StyledDeleteIcon />
            </button>
            <button 
              type="button" 
              name="edit"
              aria-pressed="false"
              aria-haspopup="true"
              onClick={() => {
                setEditItemData({ id, title, content })
                setIsModalOpen({
                  open: true,
                  type: 'form'
                });
              }}
            >
              <StyledEditIcon />
            </button>
          </span>
        )}
      </header>   

      <div className="content-wrapper">
        <h3 className="top-content info">
          <strong>@{creator}</strong>
          {timeSince(new Date(datetime))}
        </h3>

        <p>
          {content}
        </p>
      </div>
    </ItemCardContainer>
  )
}