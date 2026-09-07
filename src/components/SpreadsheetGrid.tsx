import React, { useState } from 'react';
import type { JobListing } from '../types/job';
import { calculateChance } from '../utils/chanceCalculator';
import { ExternalLink, Mail, ArrowUpDown, Sparkles, Cpu, BarChart3, GraduationCap, ChevronLeft, ChevronRight, Flame } from 'lucide-react';

interface SpreadsheetGridProps {
  listings: JobListing[];
  selectedSkills: string[];
  onOpenColdMail: (listing: JobListing) => void;
}

type SortField = 'company' | 'roleTitle' | 'industry' | 'chance' | 'postedDate';
type SortOrder = 'asc' | 'desc';

export const SpreadsheetGrid: React.FC<SpreadsheetGridProps> = ({
  listings,
  selectedSkills,
  onOpenColdMail
}) => {
  const [sortField, setSortField] = useState<SortField>('chance');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(25);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const sortedListings = [...listings].sort((a, b) => {
    let aVal: any = a[sortField as keyof JobListing];
    let bVal: any = b[sortField as keyof JobListing];

    if (sortField === 'chance') {
      aVal = calculateChance(a, selectedSkills).score;
      bVal = calculateChance(b, selectedSkills).score;
    }

    if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const totalItems = sortedListings.length;
  const totalPages = pageSize === -1 ? 1 : Math.ceil(totalItems / pageSize);
  const startIndex = pageSize === -1 ? 0 : (currentPage - 1) * pageSize;
  const paginatedListings = pageSize === -1 ? sortedListings : sortedListings.slice(startIndex, startIndex + pageSize);

  const getSpecializationBadge = (spec: string) => {
    switch (spec) {
      case 'Agentic AI':
        return <span className="badge-agentic" style={{ padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Sparkles size={11} /> Agentic AI</span>;
      case 'Machine Learning':
        return <span className="badge-ml" style={{ padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Cpu size={11} /> Machine Learning</span>;
      case 'Data Analytics':
        return <span className="badge-da" style={{ padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}><BarChart3 size={11} /> Data Analytics</span>;
      default:
        return <span style={{ padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-muted)' }}>{spec}</span>;
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
      <div className="table-container" style={{ maxHeight: '680px', overflowY: 'auto' }}>
        <table className="spreadsheet-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('company')} style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Company</span>
                  <ArrowUpDown size={12} />
                </div>
              </th>
              <th onClick={() => handleSort('roleTitle')} style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Role &amp; Specialization</span>
                  <ArrowUpDown size={12} />
                </div>
              </th>
              <th onClick={() => handleSort('industry')} style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Industry Category</span>
                  <ArrowUpDown size={12} />
                </div>
              </th>
              <th>Location &amp; Mode</th>
              <th onClick={() => handleSort('chance')} style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Getting-In Chance %</span>
                  <ArrowUpDown size={12} color="#34d399" />
                </div>
              </th>
              <th>Application Action</th>
              <th>Stipend / Salary</th>
            </tr>
          </thead>
          <tbody>
            {paginatedListings.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                  No job listings found matching your search or filters. Try adjusting your criteria.
                </td>
              </tr>
            ) : (
              paginatedListings.map((item) => {
                const chance = calculateChance(item, selectedSkills);
                return (
                  <tr key={item.id}>
                    {/* Company Column with OG Startup Tag */}
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div 
                          style={{
                            width: '34px',
                            height: '34px',
                            borderRadius: '8px',
                            background: item.isOGStartup ? 'rgba(239, 68, 68, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                            border: item.isOGStartup ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid var(--border-glass)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                            color: item.isOGStartup ? '#fca5a5' : 'var(--primary)'
                          }}
                        >
                          {item.company.charAt(0)}
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <strong style={{ fontSize: '0.9rem', color: 'white' }}>{item.company}</strong>
                            {item.isOGStartup && (
                              <span 
                                style={{
                                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%)',
                                  color: '#fca5a5',
                                  border: '1px solid rgba(239, 68, 68, 0.4)',
                                  borderRadius: '4px',
                                  padding: '1px 6px',
                                  fontSize: '0.68rem',
                                  fontWeight: 800,
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '2px'
                                }}
                              >
                                <Flame size={10} color="#fca5a5" /> OG Startup
                              </span>
                            )}
                          </div>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{item.domain}</span>
                        </div>
                      </div>
                    </td>

                    {/* Role Title & Specialization */}
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <strong style={{ fontSize: '0.88rem', color: '#f1f5f9' }}>{item.roleTitle}</strong>
                          {item.industry === 'MNC Apprenticeships' && (
                            <span className="badge-mnc" style={{ padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>
                              <GraduationCap size={10} style={{ display: 'inline', marginRight: '2px' }} /> Apprentice
                            </span>
                          )}
                        </div>
                        <div>{getSpecializationBadge(item.specialization)}</div>
                      </div>
                    </td>

                    {/* Industry Category */}
                    <td>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{item.industry}</span>
                    </td>

                    {/* Location & Work Mode */}
                    <td>
                      <div style={{ fontSize: '0.82rem' }}>
                        <div style={{ color: 'var(--text-main)' }}>{item.location}</div>
                        <span 
                          style={{ 
                            fontSize: '0.72rem', 
                            color: item.workType === 'Remote' ? '#34d399' : 'var(--text-dim)',
                            fontWeight: item.workType === 'Remote' ? 600 : 400
                          }}
                        >
                          {item.workType}
                        </span>
                      </div>
                    </td>

                    {/* Getting-In Chance % */}
                    <td>
                      <span className={chance.badgeClass} style={{ padding: '5px 12px', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 700, display: 'inline-block' }}>
                        {chance.label}
                      </span>
                    </td>

                    {/* Application Action */}
                    <td>
                      {item.applyMode === 'Direct Apply' && item.directApplyLink ? (
                        <a
                          href={item.directApplyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                          style={{ fontSize: '0.78rem', padding: '6px 12px', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.4)' }}
                        >
                          <ExternalLink size={12} />
                          <span>Direct Apply ↗</span>
                        </a>
                      ) : (
                        <button
                          className="btn-coldmail"
                          onClick={() => onOpenColdMail(item)}
                        >
                          <Mail size={12} />
                          <span>Cold Mail ✉️</span>
                        </button>
                      )}
                    </td>

                    {/* Stipend / Salary */}
                    <td>
                      <span style={{ fontSize: '0.82rem', color: '#a5b4fc', fontFamily: 'var(--font-mono)' }}>
                        {item.stipendOrSalary}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div 
        style={{ 
          padding: '14px 24px', 
          borderTop: '1px solid var(--border-glass)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          background: 'rgba(15, 23, 42, 0.8)',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Page Size:</span>
          {[25, 50, 100, -1].map((size) => (
            <button
              key={size}
              onClick={() => {
                setPageSize(size);
                setCurrentPage(1);
              }}
              style={{
                background: pageSize === size ? 'var(--primary)' : 'rgba(255, 255, 255, 0.06)',
                color: pageSize === size ? 'white' : 'var(--text-muted)',
                border: 'none',
                borderRadius: '4px',
                padding: '4px 10px',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {size === -1 ? 'All 500+' : size}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Showing {totalItems === 0 ? 0 : startIndex + 1} - {pageSize === -1 ? totalItems : Math.min(startIndex + pageSize, totalItems)} of {totalItems}
          </span>

          {pageSize !== -1 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                className="btn-secondary"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                style={{ padding: '6px 10px' }}
              >
                <ChevronLeft size={14} />
              </button>
              <span style={{ fontSize: '0.82rem', color: 'white', fontWeight: 600, padding: '0 4px' }}>
                {currentPage} / {totalPages || 1}
              </span>
              <button
                className="btn-secondary"
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                style={{ padding: '6px 10px' }}
              >
                <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
