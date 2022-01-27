import { createContext, ReactNode, useState } from 'react'

interface PlayerContextProvider {
  children: ReactNode
}

interface Episode {
  id: string
  url: string
  title: string
  members: string
  duration: number
  thumbnail: string
}

interface PlayerContextProps {
  episodeList: Episode[]
  currentEpisodeIndex: number
  play: (episode: Episode) => void
}

export const PlayerContext = createContext({} as PlayerContextProps)
