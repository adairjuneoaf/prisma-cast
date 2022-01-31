import { createContext, ReactNode, useState } from 'react'

import toast from 'react-hot-toast'
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
  hasNext: boolean
  isLooping: boolean
  isPlaying: boolean
  isShuffling: boolean
  hasPrevious: boolean
  playNext: () => void
  episodeList: Episode[]
  toggleLoop: () => void
  togglePlay: () => void
  clearPlayer: () => void
  playPrevious: () => void
  toggleShuffle: () => void
  currentEpisodeIndex: number
  play: (episode: Episode) => void
  playList: (episode: Episode) => void
  setPlayingState: (state: boolean) => void
}

export const PlayerContext = createContext({} as PlayerContextProps)

const PlayerContextProvider: React.FC<PlayerContextProvider> = ({
  children
}) => {
  const [episodeList, setEpisodeList] = useState<any>([])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isLooping, setIsLooping] = useState<boolean>(false)
  const [isShuffling, setIsShuffling] = useState<boolean>(false)
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [listEpisodesShuffled, setListEpisodesShuffled] = useState<any>([])

  // console.log('lista de episodios atual', episodeList)
  // console.log('lista de episodios embaralhada', listEpisodesShuffled)

  // console.log('episodio atual', currentEpisodeIndex)
  // console.log('quantidade de episodios', episodeList.length)

  const hasNext: boolean = currentEpisodeIndex + 1 < episodeList.length
  const hasPrevious: boolean = currentEpisodeIndex > 0

  function play(episode: any) {
    setIsPlaying(true)
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
  }

  function playList(episode: any) {
    let currentPlaylist: Array<Episode> = episodeList

    try {
      setEpisodeList(currentPlaylist.concat(episode))
      toast.success('Episódio adicionado a playlist')
    } catch {
      toast.error('Falha ao adicionar episódio a playlist')
    }
  }

  function playNext() {
    if (hasNext && isShuffling) {
      setEpisodeList(listEpisodesShuffled)

      setCurrentEpisodeIndex(0)
      setIsShuffling(!isShuffling)
    }

    if (hasNext && !isShuffling) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1)
    }
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function toggleLoop() {
    setIsLooping(!isLooping)
  }

  function toggleShuffle() {
    if (episodeList.length > 2 && !isShuffling) {
      setIsShuffling(!isShuffling)

      let actualEpisodeList = episodeList.slice(
        currentEpisodeIndex + 1,
        episodeList.length
      )
      let x = actualEpisodeList.sort(() => Math.random() - 0.5)
      setListEpisodesShuffled(x)

      toast.success('Playlist embaralhada')
    }

    if (isShuffling) {
      setIsShuffling(!isShuffling)
    }
  }

  function clearPlayer() {
    setEpisodeList([])
    setCurrentEpisodeIndex(0)
  }

  return (
    <PlayerContext.Provider
      value={{
        play,
        hasNext,
        playNext,
        playList,
        isLooping,
        isPlaying,
        toggleLoop,
        togglePlay,
        episodeList,
        hasPrevious,
        isShuffling,
        clearPlayer,
        playPrevious,
        toggleShuffle,
        setPlayingState,
        currentEpisodeIndex
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider
