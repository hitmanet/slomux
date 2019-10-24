import { useState } from 'react'

export default () => {
    const [value, setValue] = useState(true)
    return () => setValue(!value)
}