import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import { DragabbleImageProps } from "../../../typings/detail.type";

function DragabbleImage({ preview, index }: DragabbleImageProps) {
  const id = `image-${index}`;
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <StAvatarPreviewBox
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <StAvatarPreview key={id} src={preview} alt="Image" />
        </StAvatarPreviewBox>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleImage);

const StAvatarPreviewBox = styled.div`
  display: flex;
  position: relative;
`;
const StAvatarPreview = styled.img`
  width: 80px;
  height: 80px;
  background-color: transparent;
`;
