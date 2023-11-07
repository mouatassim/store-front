import React from "react";
import useAuthor from "../../hooks/useAuthor";
import Author from "../../models/Author";
import { toChapterCase } from "../../services/utils";

interface Props {
    handleChange: (author:Author) => void;
    label: string;
}

const InputSelect = ({ handleChange, label }: Props) => {
    const { data: authors } = useAuthor();
    function handleAuthor(e: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = e.target.value;
		let authorObject = authors!.find(author => author.author_name === inputValue)
		if(authorObject){
			handleChange(authorObject);
			
		}else{
			handleChange({
				author_id:-1,
				author_name:inputValue
			}
		);			
	}

    }
    return (
        <div className="form-group">
            <label>{toChapterCase(label)}</label>
            <input
                id={label.toLowerCase()}
                type="text"
                list="authors"
                onChange={(e)=>handleAuthor(e)}
            />
            <datalist id="authors">
                {authors?.map((author) => (
                    <option
                        value={author.author_name}
                        key={author.author_id}
                    >
                        {author.author_name}
                    </option>
                ))}
            </datalist>
        </div>
    );
};
export default InputSelect;
