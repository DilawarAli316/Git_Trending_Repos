import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../utils/api'
import { ShimmerTable } from 'react-shimmer-effects'
import SearchInput from '../components/SearchInput'
import uuid from 'react-uuid'

const Repos = () => {
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])

  useEffect(() => {
    reposData()
  }, [])

  const reposData = async () => {
    setLoading(true)
    try {
      const res = await axios({
        url: 'https://private-72475-githubtrendingapi.apiary-mock.com/repositories',
        method: 'GET',
      })

      setLoading(false)

      // console.log(res?.data)
      setRepos(res?.data)
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }
  return (
    <>
      <section id='customers-detail' className='inquiry-page'>
        <div className='content-body bg-white rounded-20 shadow-none p-4 p-lg-5'>
          <div className='page-title mb-4'>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <h2>Github-Repositories</h2>
              </div>
            </div>
          </div>
          <div className='dataTables_wrapper'>
            <div className='user-listing-top'>
              <div className='row align-items-end d-flex mb-3'>
                <div className='col-12 col-xl-3 col-xxl-4 align-items-start'>
                  <div className='dataTables_filter d-flex justify-content-start flex-shrink-1 mt-3'>
                    <label className='d-md-inline-block me-2 me-lg-3 my-0 align-self-center flex-shrink-0'>
                      Search
                    </label>
                    <div className='filter-wrap d-md-flex d-block flex-xl-column align-items-start align-items-xl-end justify-content-end'>
                      <div className='select-wrapper d-block w-auto mb-0 mb-md-0 me-0 me-md-0 me-xl-0'>
                        <select className='form-control shadow-sm'>
                          <option value>Status</option>
                          <option value={true}>Active</option>
                          <option value={false}>Expire</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-xl-3 col-xxl-4 align-items-start'>
                  <div className='dataTables_filter d-flex justify-content-start flex-shrink-1 mt-3'>
                    <label className='d-md-inline-block me-2 me-lg-3 my-0 align-self-center flex-shrink-0'>
                      Filter by
                    </label>
                    <div className='d-sm-flex d-block flex-grow-1'>
                      <div className='input-wrap me-0 me-sm-2 mb-2 mb-sm-0'>
                        <input
                          type='date'
                          placeholder='From'
                          className='form-control bg-white shadow-sm'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-xl-6 col-xxl-4 align-items-start'>
                  <div className='dataTables_filter d-flex justify-content-start flex-shrink-1 mt-3'>
                    <div className='search-wrap flex-grow-1'>
                      <SearchInput />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='main-tabble table-responsive mx-n2'>
              <table className='table dataTable px-2'>
                {!loading ? (
                  <>
                    <thead>
                      <tr>
                        <th className='sorting'>Project-Name</th>
                        <th className='sorting'>Stars</th>
                        <th className='sorting'>Forks</th>
                        <th className='sorting'>Language</th>
                        <th className='sorting'>Author</th>
                        <th className='sorting'>Description</th>
                        <th className='sorting'>URL</th>
                      </tr>
                    </thead>
                    <tbody key={uuid()}>
                      {repos?.length > 0 ? (
                        repos?.map((repo) => (
                          <tr>
                            <td>{repo?.name}</td>
                            <td>{repo?.stars}</td>
                            <td>{repo?.forks}</td>
                            <td>{repo?.language}</td>
                            <td>{repo?.author}</td>
                            <td>{repo?.description.substring(0, 5)}...</td>

                            <td>{repo?.url.substring(0, 5)}...</td>
                          </tr>
                        ))
                      ) : (
                        <p className='not-found'>Repositories not found</p>
                      )}
                    </tbody>
                  </>
                ) : (
                  <>
                    {/* <Lottie options={defaultOptions} height={150} width={150} /> */}
                    <ShimmerTable row={1} col={7} />
                  </>
                )}
              </table>
              <div className='container'>
                <div className='row mt-3'>
                  <div className='col-sm-12 col-xxl-12 d-flex justify-content-center justify-content-xxl-center'>
                    <div className='dataTables_paginate d-flex align-items-center'>
                      <a href='#' className='page-link previous'>
                        <i className='fas fa-chevron-circle-left' />
                      </a>
                      <ul className='pagination'>
                        {/* <li class="paginate_button page-item previous disabled"></li> */}
                        <li className='paginate_button page-item active'>
                          <a href='#' className='page-link'>
                            <span>1</span>
                          </a>
                        </li>
                        <li className='paginate_button page-item'>
                          <a href='#' className='page-link'>
                            <span>2</span>
                          </a>
                        </li>
                        <li className='paginate_button page-item'>
                          <a href='#' className='page-link'>
                            <span>3</span>
                          </a>
                        </li>
                        <li className='paginate_button page-item'>
                          <a href='#' className='page-link'>
                            <span>4</span>
                          </a>
                        </li>
                        <li className='paginate_button page-item'>
                          <a href='#' className='page-link'>
                            <span>5</span>
                          </a>
                        </li>
                        <li className='paginate_button page-item'>
                          <a href='#' className='page-link'>
                            <span>6</span>
                          </a>
                        </li>
                        <li className='paginate_button page-item'>
                          <a href='#' className='page-link'>
                            <span>7</span>
                          </a>
                        </li>
                        <li className='paginate_button page-item'>
                          <a href='#' className='page-link'>
                            <span>8</span>
                          </a>
                        </li>
                        {/* <li class="paginate_button page-item next disabled" i=""></li> */}
                      </ul>
                      <a href='#' className='page-link next'>
                        <i className='fas fa-chevron-circle-right' />
                      </a>
                    </div>
                  </div>
                  <div className='col-sm-12 col-xxl-12 align-self-center text-center text-xxl-center'>
                    <div className='dataTables_info pl-2'>
                      Showing 10 of 52 Enteries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Repos
