import { LinkBack, Span, Text, List, Item } from "./ExperienceItem.styled";
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';
import { useLocation, useParams } from 'react-router-dom';
import { nanoid } from "nanoid";
import Box from "components/Box/Box";

const ExperienceItem = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/experience";

    const { company } = useParams()

    const { selected } = useContext(ThrowContext);

const selectedCompany = selected.jobs.find(({companyName}) => companyName === company);

const { dateStart, dateEnd, position, responsibilities, country, city } = selectedCompany;

    return (
        <Box>
        <LinkBack to={backLinkHref} className="third">Back</LinkBack>
        <Box className="third"><Text>{position}</Text><Text><Span>{dateStart} - </Span><Span>{dateEnd} | </Span><Span>{city}, </Span><Span>{country}</Span></Text><List>{responsibilities.map(item => <Item key={nanoid()}>- {item}</Item>)}</List></Box>
        </Box>
    )
};

export default ExperienceItem