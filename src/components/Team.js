import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { fetchTeamData } from '../redux/teams/teamSlice';

const Team = () => {
  const { id, year } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.teams.isLoading);
  const teamData = useSelector((store) => store.teams.teamData);

  useEffect(() => {
    dispatch(fetchTeamData({ id, year }));
  }, [dispatch, id, year]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (Object.keys(teamData).length === 0) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <h1>No Team data available</h1>
      </div>
    );
  }
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-6 m-auto">
          <img
            src={teamData.team.logo}
            style={{
              width: '70%',
              margin: '0 auto',
              paddingTop: '2%',
              paddingBottom: '2%',
            }}
            alt={teamData.team.name}
            className="img"
          />
        </div>
        <div className="col-6 mx-auto my-auto">
          <h1
            className="m-0"
            id="statTitle"
            style={{ fontWeight: 'bold', color: '#3F1052' }}
          >
            {teamData.team.name}
          </h1>
          <p className="m-0" style={{ color: '#3F1052' }}>
            Rank:
            {' '}
            {teamData.rank}
            {' '}
          </p>
          <p className="m-0" style={{ color: '#3F1052' }}>
            Points:
            {' '}
            {teamData.points}
            {' '}
          </p>
        </div>
      </div>
      <section id="all-matches" className="stats">
        <div className="row my-auto" style={{ background: '#3F1052' }}>
          <p
            className="col-12 my-auto text-white"
            style={{ paddingLeft: '3%', paddingBottom: '1%' }}
          >
            All Matches
          </p>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Played</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.all.played}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>

        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Won</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.all.win}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Lose</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.all.lose}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Draw</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.all.draw}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">GF</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.all.goals.for}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">GA</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.all.goals.against}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
      </section>
      <section id="home-matches" className="stats">
        <div className="row my-auto" style={{ background: '#3F1052' }}>
          <p
            className="col-12 my-auto text-white"
            style={{ paddingLeft: '3%', paddingBottom: '1%' }}
          >
            Home Matches
          </p>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Played</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.home.played}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>

        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Won</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.home.win}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Lose</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.home.lose}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Draw</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.home.draw}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">GF</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.home.goals.for}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">GA</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.home.goals.against}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
      </section>
      <section id="away-matches" className="stats">
        <div className="row my-auto" style={{ background: '#3F1052' }}>
          <p
            className="col-12 my-auto text-white"
            style={{ paddingLeft: '3%', paddingBottom: '1%' }}
          >
            Away Matches
          </p>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Played</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.away.played}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>

        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Won</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.away.win}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Lose</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.away.lose}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">Draw</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.away.draw}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">GF</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.away.goals.for}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
        <div className="row" style={{ borderBottom: '1px solid #53116E' }}>
          <div className="col-6 d-flex">
            <p className="my-auto">GA</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="my-auto">
              {teamData.away.goals.against}
              {' '}
              <FaCircleArrowRight style={{ color: '#3F1052' }} />
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Team;
