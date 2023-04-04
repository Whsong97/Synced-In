import Card from 'react-bootstrap/Card';

function Person(props) {
    let fullName = props.person.fullName
    let company = props.person.company
    let devLevel = props.person.devLevel
    let bio = props.person.bio

    return (
        <Card className="col-2 m-2 text-sm p-3">
            <Card.Body>
            <Card.Subtitle style={{borderBottom: "1px solid black"}}>{devLevel}</Card.Subtitle>
                <Card.Title className="mb-3 mt-3">{fullName}</Card.Title>
                <Card.Subtitle> {company} </Card.Subtitle>
                <Card.Text>{bio}</Card.Text>
                <button type="button" class="btn btn-outline-primary mx-2">Portfolio</button>
                <button type="button" class="btn btn-outline-info mx-2">Contact Me</button>
            </Card.Body>
        </Card>
    );
}

export default Person;