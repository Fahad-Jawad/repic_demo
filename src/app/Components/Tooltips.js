'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Arrow
} from "@/components/ui/tooltip"
import Image from 'next/image';
import { TooltipArrow } from '@radix-ui/react-tooltip';
import questionIcon from '@/app/media/question.png'

export function Tooltips({desc}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Image src={questionIcon}  className="ml-2 cursor-pointer" alt="Icon" width={13} height={13} />
        </TooltipTrigger>
        <TooltipContent side={'right'}>
          <p>{desc}</p>
          <TooltipArrow className="TooltipArrow"  />

        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
