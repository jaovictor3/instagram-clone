import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post() {
    return (
        <>
            <header className='header-post'>

                <div className="infos-post">
                    <img className='img-header-post' src="https://storage.googleapis.com/atados-v3/user-uploaded/images/e8d4e9bf-6096-49a9-81e4-a39bb0bfec77.png" />

                    <p>instituto.proa</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                <img src="https://static.imasters.com.br/wp-content/uploads/2022/10/17101954/2021-12-17-PROA-ProProfissao-Senac-Fotos-9985-edit-4-2.jpg" />

            </div>

            <div className='foooter-post'>
                <IconContext.Provider value={{ size: "25px" }} >
                    <section className='engagement-post'>
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>
                        <div className="icon"><BsBookmark /></div>

                    </section>
                </IconContext.Provider>

                <section className='likes'>
                    <span>1,996 curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <span>instituto.proa</span>
                    </p>
                </div>

                <div className='time-post'>

                    <time>Há 1 hora</time>
                </div>

                <div className='comment' >
                    <div className='fake-comment'>
                        <IconContext.Provider value={{size:'25px'}}> 
                             <div className='icon'>
                             <BsEmojiSmile />
                             </div>
                            
                        </IconContext.Provider>

                        <input placeholder='Adicione um comentário'/>

                       
                   
                    </div>
                    <button>Publicar</button>
                </div>

            </div>



            

            
        </>
        
    )
}