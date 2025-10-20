// Thuật toán đề xuất đơn giản - hiện tại chưa sử dụng

import type { Recipe } from '~/types'

const ruleMap = {
  time: {
    morning: {
      label: 'Sáng',
      keywords: ['cháo', 'trứng', 'bánh', 'sữa', 'bánh mì', 'sáng'],
    },
    noon: {
      label: 'Trưa',
      keywords: ['cơm', 'mì', 'xào', 'gà', 'cá'],
    },
    night: {
      label: 'Tối',
      keywords: ['lẩu', 'canh', 'mì', 'nướng', 'xào'],
    },
  },
  weather: {
    hot: {
      label: 'Nóng',
      keywords: ['mát', 'đá', 'salad', 'dưa'],
    },
    cold: {
      label: 'Lạnh',
      keywords: ['canh', 'lẩu', 'hầm', 'nồi'],
    },
  },
  category: {
    vietnamese: {
      label: 'Món Việt',
      keywords: ['phở', 'bún', 'bánh', 'chả'],
    },
    seafood: {
      label: 'Hải sản',
      keywords: ['tôm', 'cá', 'cua', 'mực'],
    },
    home: {
      label: 'Gia đình',
      keywords: ['xào', 'trứng', 'đậu', 'cà'],
    },
  },
} as const

type CategoryKey = keyof typeof ruleMap.category
type WeatherKey = keyof typeof ruleMap.weather
type TimeKey = keyof typeof ruleMap.time

export function useRecommend() {
  const now = new Date()
  const hour = now.getHours()

  const getTimePeriod = (): TimeKey => {
    if (hour < 10)
      return 'morning'
    if (hour < 16)
      return 'noon'
    return 'night'
  }

  const getWeather = (): WeatherKey | undefined => {
    const list: WeatherKey[] = ['hot', 'cold']
    return list[Math.floor(Math.random() * list.length)]
  }

  const recommend = (recipes: Recipe[], preferCategory?: CategoryKey) => {
    const time = getTimePeriod()
    const weather = getWeather()

    const filtered = recipes.filter((r) => {
      const name = r.name || ''

      const matchTime = ruleMap.time[time].keywords.some(k => name.includes(k))
      const matchWeather = !weather || ruleMap.weather[weather].keywords.some(k => name.includes(k))
      const matchCategory
        = preferCategory
          ? ruleMap.category[preferCategory].keywords.some(k => name.includes(k))
          : false

      return matchTime || matchWeather || matchCategory
    })

    const list = filtered.length ? filtered : recipes
    return list[Math.floor(Math.random() * list.length)]
  }

  return { recommend }
}