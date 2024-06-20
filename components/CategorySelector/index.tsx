import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, forwardRef } from 'react'
import { truncate } from '../../utils/index.util'
import { IoIosArrowDown } from 'react-icons/io'


interface listBoxProps {
    active?: boolean
    text: string
}

interface Props {
    handleCategoryChanged: (category: CategoryItemProps) => void
    categories: CategoryItemProps[];
    selectedCategory?: CategoryItemProps
}


const ListBoxItem = forwardRef((props: listBoxProps, ref: any) => {
    let { active, text, ...rest } = props

    return (
        <button ref={ref} {...rest} className={`text-slate-100 dark:text-slate-300  w-full p-1 rounded-md text-left ${active ? "bg-slate-400 dark:text-slate-600 text-slate-800" : ""}`}>
            {text}
        </button>
    )
})

ListBoxItem.displayName = "ListBoxItem"




const CategorySelector = ({ handleCategoryChanged, categories, selectedCategory }: Props) => {
    return (
        <Listbox value={selectedCategory} onChange={handleCategoryChanged}>
            <div className='relative w-fit self-end'>
                <Listbox.Button
                    className="w-32 text-slate-300 bg-slate-500 dark:bg-slate-700 md:dark:bg-slate-900 rounded-lg capitalize p-2 inline-flex justify-between items-center space-x-2 text-md">
                    <span>
                        {selectedCategory ? truncate(selectedCategory.name, 8) : "N/A"}
                    </span>
                    <IoIosArrowDown />
                </Listbox.Button>

                <Transition
                    as={Fragment}
                    enter="transition duration-200 ease-in-out"
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave="transition duration-100 linear"
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                >

                    <Listbox.Options className={"flex flex-col space-y-2 items-start absolute mt-2 w-32 py-4 px-2 z-30 right-0 bg-slate-500 dark:bg-slate-900 rounded-md"}>

                        {categories.map((category) => {
                            return (
                                <Listbox.Option key={category._id} value={category}>
                                    {
                                        ({ active }) => (
                                            <ListBoxItem active={active} text={category.name} />
                                        )
                                    }

                                </Listbox.Option>
                            )
                        })}

                    </Listbox.Options>
                </Transition>
            </div>

        </Listbox>
    )
}

export default CategorySelector