import { Move } from "@/app/types/pokemon";
import React from "react";

const TableComponent = ({ moves }: { moves: Move[] }) => {
  const orderedMoves = moves
    .map((item) => {
      const moveDetailObject = item.version_group_details[0];
      const method = moveDetailObject.move_learn_method.name;
      const level = moveDetailObject.level_learned_at || 0;
      const gameVersion =
        moveDetailObject.version_group.name.replace("-", " ") || "-";

      return {
        name: item.move.name,
        level: level,
        method: method,
        version: gameVersion,
      };
    })
    .sort((a, b) => a.level - b.level);
  const filteredMovesLevelUp = orderedMoves.filter((item) => item.level > 0);
  const filteredMoves = orderedMoves
    .filter((item) => item.level <= 0)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <table className="nes-table is-bordered table-auto min-w-max w-full border-collapse">
      <thead>
        <tr>
          <th className="w-15">#</th>
          <th className="px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap">
            Move
          </th>
          <th>Method</th>
          <th>Level</th>
          <th>Game Version</th>
        </tr>
      </thead>
      <tbody>
        {filteredMovesLevelUp.map((move, index) => {
          return (
            <tr key={index}>
              <td className="w-15">{index + 1}</td>
              <td className="px-4 py-2 capitalize">
                <b>{move.name}</b>
              </td>
              <td>{move.method}</td>
              <td>{move.level}</td>
              <td>{move.version}</td>
            </tr>
          );
        })}
        {filteredMoves.map((move, index) => {
          return (
            <tr key={index}>
              <td className="w-15">{index + 1}</td>
              <td className="capitalize">{move.name}</td>
              <td>{move.method}</td>
              <td>-</td>
              <td>{move.version}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
