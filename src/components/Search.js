import React, { useState } from 'react';

export default function Search({ setSearch }) {
	const [newSearch, setNewSearch] = useState({ title: '' });

	const onChange = e => {
		setNewSearch({ title: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		setSearch(newSearch.title);
	};

	return (
		<div>
			<div className='row'>
				<div className='col-md-12'>
					<form onSubmit={onSubmit} className='w-50 mx-auto'>
						<div className='input-group mb-4'>
							<input
								type='text'
								value={newSearch.title}
								onChange={onChange}
								className='form-control'
							/>
							<span className='input-group-btn'>
								<button
									type='submit'
									value='Submit'
									className='btn btn-green'
									// style={{ backgroundColor: '#0fd6bd' }}
								>
									Search
								</button>
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
