import React from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function SquareImage({ className = "", ...props }:ImageProps){
  return <img className={`aspect-square ${className}`} {...props} />;
}
