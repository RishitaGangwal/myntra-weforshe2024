import React, { useState } from "react";
import { Table, Input, Button } from "antd";
import Footer from "../Footer/Footer";

const Ranking = () => {
  const [participants, setParticipants] = useState([
    { name: "Emily Smith", votes: 0 },
    { name: "John Doe", votes: 0 },
    { name: "Samantha Johnson", votes: 0 },
    { name: "Michael Brown", votes: 0 },
  ]);
  
  const [searchQuery, setSearchQuery] = useState("");

  const handleVote = (index) => {
    const newParticipants = [...participants];
    newParticipants[index].votes += 1;
    newParticipants.sort((a, b) => b.votes - a.votes);
    setParticipants(newParticipants);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredParticipants = participants.filter((participant) =>
    participant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    {
      title: "Ranking No.",
      dataIndex: "ranking",
      key: "ranking",
      render: (text, record, index) =>
        participants.findIndex((p) => p.name === record.name) + 1,
    },
    {
      title: "Participant Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Vote Now",
      key: "vote",
      render: (text, record, index) => (
        <Button type="primary" onClick={() => handleVote(index)}>
          Vote Now
        </Button>
      ),
    },
    {
      title: "No. of Total Votes",
      dataIndex: "votes",
      key: "votes",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[75%] text-center">
        <h1 className="text-5xl font-bold mb-12">Ranking</h1>
        <div className="my-4 p-4 bg-red-100 border border-red-400 text-black font-bold rounded-lg shadow-lg">
          <p>
            Disclaimer: Only the top 10 participants will get rewards of 5000 XP where 1 XP = 1 Rs.
          </p>
        </div>
        <Input
          type="text"
          placeholder="Search participant..."
          value={searchQuery}
          onChange={handleSearch}
          className="mb-4 p-2"
          style={{ width: "100%", marginBottom: 16}}
        />
        <Table
          columns={columns}
          dataSource={filteredParticipants.map((participant, index) => ({
            ...participant,
            key: index,
          }))}
          pagination={false}
          className="border-[var(--White-20,rgba(255,255,255,.2))] bg-[var(--Black-40,_rgba(0,_0,_0,_.4))] shadow-[0_0_5px_#0000001a] backdrop-filter backdrop-blur-[10px]"
        />
      </div>
    </div>
  );
};

export default Ranking;
