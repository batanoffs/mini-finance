import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AuthContext } from '../../../contexts/AuthContext'
import { EmptyCard } from '../empty/EmptyCard'

import containers from './profile.module.css'

export const ProfileCard = () => {
    const { name, picture, phone, email, address, country } = useContext(AuthContext)

    return (
        <EmptyCard color="secondary" className={containers.customBlockProfile}>
            <div className={containers.customBlockProfileImageWrap}>
                <img src={picture} className={containers.customBlockProfileImage} alt="avatar" />

                <Link to="/dashboard/settings" className={containers.customBlockEditIcon}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
            </div>

            <p>
                <strong>Name: </strong>
                <span>{name}</span>
            </p>

            <p>
                <strong>Email: </strong>
                <a
                    href={`mailto:${email}`}
                    style={{
                        color: 'var(--heading-color)',
                        hover: 'white',
                    }}
                >
                    {email}
                </a>
            </p>
            <p style={{ paddingBottom: '0' }}>
                <strong>Phone:</strong>
                <a
                    href={`tel:${phone}`}
                    style={{
                        paddingLeft: '5px',
                        color: 'var(--heading-color)',
                    }}
                >
                    {phone}
                </a>
            </p>
            {country && (
                <p>
                    <strong>Country:</strong>
                    <span> {country}</span>
                </p>
            )}
            {address && (
                <p>
                    <strong>Address: </strong>
                    <span>{address}</span>
                </p>
            )}
        </EmptyCard>
    )
}
